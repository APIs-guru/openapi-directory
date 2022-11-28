
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/support/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://support.us-east-1.amazonaws.com",
	"http://support.{region}.amazonaws.com.cn",
	"https://support.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/support/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def add_attachments_to_set(self, request: operations.AddAttachmentsToSetRequest) -> operations.AddAttachmentsToSetResponse:
        r"""<p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The <code>expiryTime</code> returned in the response is when the set expires. </p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddAttachmentsToSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddAttachmentsToSetResponse])
                res.add_attachments_to_set_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_id_not_found = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_expired = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_size_limit_exceeded = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_limit_exceeded = out

        return res

    
    def add_communication_to_case(self, request: operations.AddCommunicationToCaseRequest) -> operations.AddCommunicationToCaseResponse:
        r"""<p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code> parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the <code>ccEmailAddresses</code> parameter. The <code>communicationBody</code> value contains the text of the communication.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddCommunicationToCaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddCommunicationToCaseResponse])
                res.add_communication_to_case_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.case_id_not_found = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_id_not_found = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_expired = out

        return res

    
    def create_case(self, request: operations.CreateCaseRequest) -> operations.CreateCaseResponse:
        r"""<p>Creates a case in the AWS Support Center. This operation is similar to how you create a case in the AWS Support Center <a href=\"https://console.aws.amazon.com/support/home#/case/create\">Create Case</a> page.</p> <p>The AWS Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the AWS Support Center <a href=\"https://console.aws.amazon.com/support/home#/case/create\">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href=\"https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html\">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href=\"https://console.aws.amazon.com/support\">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.CreateCase"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateCaseResponse])
                res.create_case_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.case_creation_limit_exceeded = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_id_not_found = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_set_expired = out

        return res

    
    def describe_attachment(self, request: operations.DescribeAttachmentRequest) -> operations.DescribeAttachmentResponse:
        r"""<p>Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeAttachmentResponse])
                res.describe_attachment_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.describe_attachment_limit_exceeded = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.attachment_id_not_found = out

        return res

    
    def describe_cases(self, request: operations.DescribeCasesRequest) -> operations.DescribeCasesResponse:
        r"""<p>Returns a list of cases that you specify by passing one or more case IDs. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by date. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> parameters to specify how much information to return.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a href=\"https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html\">CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeCases"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeCasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeCasesResponse])
                res.describe_cases_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.case_id_not_found = out

        return res

    
    def describe_communications(self, request: operations.DescribeCommunicationsRequest) -> operations.DescribeCommunicationsResponse:
        r"""<p>Returns communications and attachments for one or more support cases. Use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a specific case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the results. Set <code>maxResults</code> to the number of cases that you want to display on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeCommunicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeCommunicationsResponse])
                res.describe_communications_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.case_id_not_found = out

        return res

    
    def describe_services(self, request: operations.DescribeServicesRequest) -> operations.DescribeServicesResponse:
        r"""<p>Returns the current list of AWS services and a list of service categories for each service. You then use service names and categories in your <a>CreateCase</a> requests. Each AWS service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that appear in the <b>Service</b> and <b>Category</b> lists on the AWS Support Center <a href=\"https://console.aws.amazon.com/support/home#/case/create\">Create Case</a> page. The values in those fields don't necessarily match the service codes and categories returned by the <code>DescribeServices</code> operation. Always use the service codes and categories that the <code>DescribeServices</code> operation returns, so that you have the most recent set of service and category codes.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeServices"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeServicesResponse])
                res.describe_services_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def describe_severity_levels(self, request: operations.DescribeSeverityLevelsRequest) -> operations.DescribeSeverityLevelsResponse:
        r"""<p>Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type that you include for a <a>CreateCase</a> request.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeSeverityLevelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeSeverityLevelsResponse])
                res.describe_severity_levels_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def describe_trusted_advisor_check_refresh_statuses(self, request: operations.DescribeTrustedAdvisorCheckRefreshStatusesRequest) -> operations.DescribeTrustedAdvisorCheckRefreshStatusesResponse:
        r"""<p>Returns the refresh status of the AWS Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically, and you can't return their refresh statuses by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you call this operation for these checks, you might see an <code>InvalidParameterValue</code> error.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTrustedAdvisorCheckRefreshStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse])
                res.describe_trusted_advisor_check_refresh_statuses_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def describe_trusted_advisor_check_result(self, request: operations.DescribeTrustedAdvisorCheckResultRequest) -> operations.DescribeTrustedAdvisorCheckResultResponse:
        r"""<p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status</b> - The alert status of the check can be <code>ok</code> (green), <code>warning</code> (yellow), <code>error</code> (red), or <code>not_available</code>.</p> </li> <li> <p> <b>timestamp</b> - The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId</b> - The unique identifier for the check.</p> </li> </ul> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTrustedAdvisorCheckResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTrustedAdvisorCheckResultResponse])
                res.describe_trusted_advisor_check_result_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def describe_trusted_advisor_check_summaries(self, request: operations.DescribeTrustedAdvisorCheckSummariesRequest) -> operations.DescribeTrustedAdvisorCheckSummariesResponse:
        r"""<p>Returns the results for the AWS Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTrustedAdvisorCheckSummariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTrustedAdvisorCheckSummariesResponse])
                res.describe_trusted_advisor_check_summaries_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def describe_trusted_advisor_checks(self, request: operations.DescribeTrustedAdvisorChecksRequest) -> operations.DescribeTrustedAdvisorChecksResponse:
        r"""<p>Returns information about all available AWS Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code. The AWS Support API currently supports English (\"en\") and Japanese (\"ja\"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the AWS Region to us-east-1.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> <li> <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTrustedAdvisorChecksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTrustedAdvisorChecksResponse])
                res.describe_trusted_advisor_checks_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def refresh_trusted_advisor_check(self, request: operations.RefreshTrustedAdvisorCheckRequest) -> operations.RefreshTrustedAdvisorCheckResponse:
        r"""<p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <note> <p>Some checks are refreshed automatically. If you call the <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see the <code>InvalidParameterValue</code> error.</p> </note> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshTrustedAdvisorCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RefreshTrustedAdvisorCheckResponse])
                res.refresh_trusted_advisor_check_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out

        return res

    
    def resolve_case(self, request: operations.ResolveCaseRequest) -> operations.ResolveCaseResponse:
        r"""<p>Resolves a support case. This operation takes a <code>caseId</code> and returns the initial and final state of the case.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the AWS Support API. </p> </li> <li> <p>If you call the AWS Support API from an account that does not have a Business or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href=\"http://aws.amazon.com/premiumsupport/\">AWS Support</a>.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSSupport_20130415.ResolveCase"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResolveCaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResolveCaseResponse])
                res.resolve_case_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_error = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.case_id_not_found = out

        return res

    