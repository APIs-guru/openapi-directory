import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.clever.com/v1.2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getAdminsForDistrict - Returns the admins for a district
    **/
    getAdminsForDistrict(req: operations.GetAdminsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminsForDistrictResponse>;
    /**
     * getContact - Returns a specific student contact
    **/
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * getContacts - Returns a list of student contacts
    **/
    getContacts(req: operations.GetContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsResponse>;
    /**
     * getContactsForStudent - Returns the contacts for a student
    **/
    getContactsForStudent(req: operations.GetContactsForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsForStudentResponse>;
    /**
     * getDistrict - Returns a specific district
    **/
    getDistrict(req: operations.GetDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictResponse>;
    /**
     * getDistrictAdmin - Returns a specific district admin
    **/
    getDistrictAdmin(req: operations.GetDistrictAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminResponse>;
    /**
     * getDistrictAdmins - Returns a list of district admins
    **/
    getDistrictAdmins(req: operations.GetDistrictAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminsResponse>;
    /**
     * getDistrictForSchool - Returns the district for a school
    **/
    getDistrictForSchool(req: operations.GetDistrictForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSchoolResponse>;
    /**
     * getDistrictForSection - Returns the district for a section
    **/
    getDistrictForSection(req: operations.GetDistrictForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSectionResponse>;
    /**
     * getDistrictForStudent - Returns the district for a student
    **/
    getDistrictForStudent(req: operations.GetDistrictForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForStudentResponse>;
    /**
     * getDistrictForStudentContact - Returns the district for a student contact
    **/
    getDistrictForStudentContact(req: operations.GetDistrictForStudentContactRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForStudentContactResponse>;
    /**
     * getDistrictForTeacher - Returns the district for a teacher
    **/
    getDistrictForTeacher(req: operations.GetDistrictForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForTeacherResponse>;
    /**
     * getDistrictStatus - Returns the status of the district
    **/
    getDistrictStatus(req: operations.GetDistrictStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictStatusResponse>;
    /**
     * getDistricts - Returns a list of districts
    **/
    getDistricts(config?: AxiosRequestConfig): Promise<operations.GetDistrictsResponse>;
    /**
     * getGradeLevelsForTeacher - Returns the grade levels for sections a teacher teaches
    **/
    getGradeLevelsForTeacher(req: operations.GetGradeLevelsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetGradeLevelsForTeacherResponse>;
    /**
     * getSchool - Returns a specific school
    **/
    getSchool(req: operations.GetSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolResponse>;
    /**
     * getSchoolAdmin - Returns a specific school admin
    **/
    getSchoolAdmin(req: operations.GetSchoolAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolAdminResponse>;
    /**
     * getSchoolAdmins - Returns a list of school admins
    **/
    getSchoolAdmins(req: operations.GetSchoolAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolAdminsResponse>;
    /**
     * getSchoolForSection - Returns the school for a section
    **/
    getSchoolForSection(req: operations.GetSchoolForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForSectionResponse>;
    /**
     * getSchoolForStudent - Returns the primary school for a student
    **/
    getSchoolForStudent(req: operations.GetSchoolForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForStudentResponse>;
    /**
     * getSchoolForTeacher - Retrieves school info for a teacher.
    **/
    getSchoolForTeacher(req: operations.GetSchoolForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForTeacherResponse>;
    /**
     * getSchools - Returns a list of schools
    **/
    getSchools(req: operations.GetSchoolsRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsResponse>;
    /**
     * getSchoolsForDistrict - Returns the schools for a district
    **/
    getSchoolsForDistrict(req: operations.GetSchoolsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsForDistrictResponse>;
    /**
     * getSchoolsForSchoolAdmin - Returns the schools for a school admin
    **/
    getSchoolsForSchoolAdmin(req: operations.GetSchoolsForSchoolAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsForSchoolAdminResponse>;
    /**
     * getSection - Returns a specific section
    **/
    getSection(req: operations.GetSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionResponse>;
    /**
     * getSections - Returns a list of sections
    **/
    getSections(req: operations.GetSectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsResponse>;
    /**
     * getSectionsForDistrict - Returns the sections for a district
    **/
    getSectionsForDistrict(req: operations.GetSectionsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForDistrictResponse>;
    /**
     * getSectionsForSchool - Returns the sections for a school
    **/
    getSectionsForSchool(req: operations.GetSectionsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForSchoolResponse>;
    /**
     * getSectionsForStudent - Returns the sections for a student
    **/
    getSectionsForStudent(req: operations.GetSectionsForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForStudentResponse>;
    /**
     * getSectionsForTeacher - Returns the sections for a teacher
    **/
    getSectionsForTeacher(req: operations.GetSectionsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForTeacherResponse>;
    /**
     * getStudent - Returns a specific student
    **/
    getStudent(req: operations.GetStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentResponse>;
    /**
     * getStudentForContact - Returns the student for a student contact
    **/
    getStudentForContact(req: operations.GetStudentForContactRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentForContactResponse>;
    /**
     * getStudents - Returns a list of students
    **/
    getStudents(req: operations.GetStudentsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsResponse>;
    /**
     * getStudentsForDistrict - Returns the students for a district
    **/
    getStudentsForDistrict(req: operations.GetStudentsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForDistrictResponse>;
    /**
     * getStudentsForSchool - Returns the students for a school
    **/
    getStudentsForSchool(req: operations.GetStudentsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSchoolResponse>;
    /**
     * getStudentsForSection - Returns the students for a section
    **/
    getStudentsForSection(req: operations.GetStudentsForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSectionResponse>;
    /**
     * getStudentsForTeacher - Returns the students for a teacher
    **/
    getStudentsForTeacher(req: operations.GetStudentsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForTeacherResponse>;
    /**
     * getTeacher - Returns a specific teacher
    **/
    getTeacher(req: operations.GetTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetTeacherResponse>;
    /**
     * getTeacherForSection - Returns the primary teacher for a section
    **/
    getTeacherForSection(req: operations.GetTeacherForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeacherForSectionResponse>;
    /**
     * getTeachers - Returns a list of teachers
    **/
    getTeachers(req: operations.GetTeachersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersResponse>;
    /**
     * getTeachersForDistrict - Returns the teachers for a district
    **/
    getTeachersForDistrict(req: operations.GetTeachersForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForDistrictResponse>;
    /**
     * getTeachersForSchool - Returns the teachers for a school
    **/
    getTeachersForSchool(req: operations.GetTeachersForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSchoolResponse>;
    /**
     * getTeachersForSection - Returns the teachers for a section
    **/
    getTeachersForSection(req: operations.GetTeachersForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSectionResponse>;
    /**
     * getTeachersForStudent - Returns the teachers for a student
    **/
    getTeachersForStudent(req: operations.GetTeachersForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForStudentResponse>;
}
export {};
