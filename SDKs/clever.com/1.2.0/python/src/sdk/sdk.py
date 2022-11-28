

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.clever.com/v1.2",
]


class SDK:
    

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
        
    
    
    
    def get_admins_for_district(self, request: operations.GetAdminsForDistrictRequest) -> operations.GetAdminsForDistrictResponse:
        r"""Returns the admins for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/admins", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictAdminsResponse])
                res.district_admins_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_contact(self, request: operations.GetContactRequest) -> operations.GetContactResponse:
        r"""Returns a specific student contact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contacts/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentContactResponse])
                res.student_contact_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_contacts(self, request: operations.GetContactsRequest) -> operations.GetContactsResponse:
        r"""Returns a list of student contacts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contacts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentContactsResponse])
                res.student_contacts_response = out

        return res

    
    def get_contacts_for_student(self, request: operations.GetContactsForStudentRequest) -> operations.GetContactsForStudentResponse:
        r"""Returns the contacts for a student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}/contacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContactsForStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentContactsForStudentResponse])
                res.student_contacts_for_student_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district(self, request: operations.GetDistrictRequest) -> operations.GetDistrictResponse:
        r"""Returns a specific district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_admin(self, request: operations.GetDistrictAdminRequest) -> operations.GetDistrictAdminResponse:
        r"""Returns a specific district admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/district_admins/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictAdminResponse])
                res.district_admin_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_admins(self, request: operations.GetDistrictAdminsRequest) -> operations.GetDistrictAdminsResponse:
        r"""Returns a list of district admins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/district_admins"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictAdminsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictAdminsResponse])
                res.district_admins_response = out

        return res

    
    def get_district_for_school(self, request: operations.GetDistrictForSchoolRequest) -> operations.GetDistrictForSchoolResponse:
        r"""Returns the district for a school
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schools/{id}/district", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictForSchoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_for_section(self, request: operations.GetDistrictForSectionRequest) -> operations.GetDistrictForSectionResponse:
        r"""Returns the district for a section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}/district", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictForSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_for_student(self, request: operations.GetDistrictForStudentRequest) -> operations.GetDistrictForStudentResponse:
        r"""Returns the district for a student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}/district", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictForStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_for_student_contact(self, request: operations.GetDistrictForStudentContactRequest) -> operations.GetDistrictForStudentContactResponse:
        r"""Returns the district for a student contact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contacts/{id}/district", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictForStudentContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_for_teacher(self, request: operations.GetDistrictForTeacherRequest) -> operations.GetDistrictForTeacherResponse:
        r"""Returns the district for a teacher
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}/district", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictForTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_status(self, request: operations.GetDistrictStatusRequest) -> operations.GetDistrictStatusResponse:
        r"""Returns the status of the district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictStatusResponses])
                res.district_status_responses = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_districts(self) -> operations.GetDistrictsResponse:
        r"""Returns a list of districts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/districts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictsResponse])
                res.districts_response = out

        return res

    
    def get_grade_levels_for_teacher(self, request: operations.GetGradeLevelsForTeacherRequest) -> operations.GetGradeLevelsForTeacherResponse:
        r"""Returns the grade levels for sections a teacher teaches
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}/grade_levels", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGradeLevelsForTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GradeLevelsResponse])
                res.grade_levels_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school(self, request: operations.GetSchoolRequest) -> operations.GetSchoolResponse:
        r"""Returns a specific school
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schools/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolResponse])
                res.school_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school_admin(self, request: operations.GetSchoolAdminRequest) -> operations.GetSchoolAdminResponse:
        r"""Returns a specific school admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/school_admins/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolAdminResponse])
                res.school_admin_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school_admins(self, request: operations.GetSchoolAdminsRequest) -> operations.GetSchoolAdminsResponse:
        r"""Returns a list of school admins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/school_admins"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolAdminsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolAdminsResponse])
                res.school_admins_response = out

        return res

    
    def get_school_for_section(self, request: operations.GetSchoolForSectionRequest) -> operations.GetSchoolForSectionResponse:
        r"""Returns the school for a section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}/school", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolForSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolResponse])
                res.school_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school_for_student(self, request: operations.GetSchoolForStudentRequest) -> operations.GetSchoolForStudentResponse:
        r"""Returns the primary school for a student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}/school", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolForStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolResponse])
                res.school_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school_for_teacher(self, request: operations.GetSchoolForTeacherRequest) -> operations.GetSchoolForTeacherResponse:
        r"""Retrieves school info for a teacher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}/school", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolForTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolResponse])
                res.school_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_schools(self, request: operations.GetSchoolsRequest) -> operations.GetSchoolsResponse:
        r"""Returns a list of schools
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schools"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolsResponse])
                res.schools_response = out

        return res

    
    def get_schools_for_district(self, request: operations.GetSchoolsForDistrictRequest) -> operations.GetSchoolsForDistrictResponse:
        r"""Returns the schools for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/schools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolsResponse])
                res.schools_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_schools_for_school_admin(self, request: operations.GetSchoolsForSchoolAdminRequest) -> operations.GetSchoolsForSchoolAdminResponse:
        r"""Returns the schools for a school admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/school_admins/{id}/schools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolsForSchoolAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolsResponse])
                res.schools_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_section(self, request: operations.GetSectionRequest) -> operations.GetSectionResponse:
        r"""Returns a specific section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionResponse])
                res.section_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_sections(self, request: operations.GetSectionsRequest) -> operations.GetSectionsResponse:
        r"""Returns a list of sections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out

        return res

    
    def get_sections_for_district(self, request: operations.GetSectionsForDistrictRequest) -> operations.GetSectionsForDistrictResponse:
        r"""Returns the sections for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/sections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_sections_for_school(self, request: operations.GetSectionsForSchoolRequest) -> operations.GetSectionsForSchoolResponse:
        r"""Returns the sections for a school
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schools/{id}/sections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsForSchoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_sections_for_student(self, request: operations.GetSectionsForStudentRequest) -> operations.GetSectionsForStudentResponse:
        r"""Returns the sections for a student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}/sections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsForStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_sections_for_teacher(self, request: operations.GetSectionsForTeacherRequest) -> operations.GetSectionsForTeacherResponse:
        r"""Returns the sections for a teacher
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}/sections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsForTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_student(self, request: operations.GetStudentRequest) -> operations.GetStudentResponse:
        r"""Returns a specific student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentResponse])
                res.student_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_student_for_contact(self, request: operations.GetStudentForContactRequest) -> operations.GetStudentForContactResponse:
        r"""Returns the student for a student contact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contacts/{id}/student", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentForContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentResponse])
                res.student_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_students(self, request: operations.GetStudentsRequest) -> operations.GetStudentsResponse:
        r"""Returns a list of students
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/students"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out

        return res

    
    def get_students_for_district(self, request: operations.GetStudentsForDistrictRequest) -> operations.GetStudentsForDistrictResponse:
        r"""Returns the students for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/students", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_students_for_school(self, request: operations.GetStudentsForSchoolRequest) -> operations.GetStudentsForSchoolResponse:
        r"""Returns the students for a school
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schools/{id}/students", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsForSchoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_students_for_section(self, request: operations.GetStudentsForSectionRequest) -> operations.GetStudentsForSectionResponse:
        r"""Returns the students for a section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}/students", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsForSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_students_for_teacher(self, request: operations.GetStudentsForTeacherRequest) -> operations.GetStudentsForTeacherResponse:
        r"""Returns the students for a teacher
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}/students", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsForTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teacher(self, request: operations.GetTeacherRequest) -> operations.GetTeacherResponse:
        r"""Returns a specific teacher
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teachers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeacherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeacherResponse])
                res.teacher_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teacher_for_section(self, request: operations.GetTeacherForSectionRequest) -> operations.GetTeacherForSectionResponse:
        r"""Returns the primary teacher for a section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}/teacher", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeacherForSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeacherResponse])
                res.teacher_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teachers(self, request: operations.GetTeachersRequest) -> operations.GetTeachersResponse:
        r"""Returns a list of teachers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teachers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out

        return res

    
    def get_teachers_for_district(self, request: operations.GetTeachersForDistrictRequest) -> operations.GetTeachersForDistrictResponse:
        r"""Returns the teachers for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/teachers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teachers_for_school(self, request: operations.GetTeachersForSchoolRequest) -> operations.GetTeachersForSchoolResponse:
        r"""Returns the teachers for a school
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schools/{id}/teachers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersForSchoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teachers_for_section(self, request: operations.GetTeachersForSectionRequest) -> operations.GetTeachersForSectionResponse:
        r"""Returns the teachers for a section
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sections/{id}/teachers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersForSectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teachers_for_student(self, request: operations.GetTeachersForStudentRequest) -> operations.GetTeachersForStudentResponse:
        r"""Returns the teachers for a student
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/students/{id}/teachers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersForStudentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    