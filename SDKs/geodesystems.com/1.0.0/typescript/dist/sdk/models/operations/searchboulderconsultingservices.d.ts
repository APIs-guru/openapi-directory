import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBoulderConsultingServicesQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbBoulderConsultingServicesAccountDescription?: string;
    searchDbBoulderConsultingServicesAmount?: number;
    searchDbBoulderConsultingServicesComment?: string;
    searchDbBoulderConsultingServicesDate?: string;
    searchDbBoulderConsultingServicesDepartment?: string;
    searchDbBoulderConsultingServicesFund?: string;
    searchDbBoulderConsultingServicesObject?: string;
    searchDbBoulderConsultingServicesOrganization?: string;
    searchDbBoulderConsultingServicesProject?: string;
    searchDbBoulderConsultingServicesPurchaseOrder?: string;
    searchDbBoulderConsultingServicesVendorName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderConsultingServicesRequest extends SpeakeasyBase {
    queryParams: SearchBoulderConsultingServicesQueryParams;
}
export declare class SearchBoulderConsultingServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
