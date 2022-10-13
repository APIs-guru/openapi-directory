import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://unify.apideck.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def applicants_add(self, request: operations.ApplicantsAddRequest) -> operations.ApplicantsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicantsAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateApplicantResponse])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(create_applicant_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAddResponses(unexpected_error_response=out)

        return res

    
    def applicants_all(self, request: operations.ApplicantsAllRequest) -> operations.ApplicantsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicantsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetApplicantsResponse])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(get_applicants_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsAllResponses(unexpected_error_response=out)

        return res

    
    def applicants_one(self, request: operations.ApplicantsOneRequest) -> operations.ApplicantsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ats/applicants/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicantsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetApplicantResponse])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(get_applicant_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApplicantsOneResponses(unexpected_error_response=out)

        return res

    
    def jobs_all(self, request: operations.JobsAllRequest) -> operations.JobsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetJobsResponse])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(get_jobs_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsAllResponses(unexpected_error_response=out)

        return res

    
    def jobs_one(self, request: operations.JobsOneRequest) -> operations.JobsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ats/jobs/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetJobResponse])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(get_job_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.JobsOneResponses(unexpected_error_response=out)

        return res

    