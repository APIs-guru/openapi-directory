import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchConstructionPermitsQueryParams extends SpeakeasyBase {
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
    searchDbConstructionPermitsAddress?: string;
    searchDbConstructionPermitsAffordableHsgUnit?: number;
    searchDbConstructionPermitsApplied?: string;
    searchDbConstructionPermitsApproved?: string;
    searchDbConstructionPermitsBuildingUsesAndWorkScopes?: string;
    searchDbConstructionPermitsCaseStatus?: string;
    searchDbConstructionPermitsCategory?: string;
    searchDbConstructionPermitsCoDate?: string;
    searchDbConstructionPermitsCompletionDate?: string;
    searchDbConstructionPermitsContractorCompany?: string;
    searchDbConstructionPermitsContractorFirstName?: string;
    searchDbConstructionPermitsContractorLastName?: string;
    searchDbConstructionPermitsExistingResUnit?: number;
    searchDbConstructionPermitsIssued?: string;
    searchDbConstructionPermitsNarrativeDescription?: string;
    searchDbConstructionPermitsNewResUnit?: number;
    searchDbConstructionPermitsNewSf?: number;
    searchDbConstructionPermitsOwner1Company?: string;
    searchDbConstructionPermitsOwner1FirstName?: string;
    searchDbConstructionPermitsOwner1LastName?: string;
    searchDbConstructionPermitsOwner2Company?: string;
    searchDbConstructionPermitsOwner2FirstName?: string;
    searchDbConstructionPermitsOwner2LastName?: string;
    searchDbConstructionPermitsPermitTypes?: string;
    searchDbConstructionPermitsPrimaryCompany?: string;
    searchDbConstructionPermitsPrimaryFirstName?: string;
    searchDbConstructionPermitsPrimaryLastName?: string;
    searchDbConstructionPermitsRemodelSf?: number;
    searchDbConstructionPermitsTotalProjectValue?: number;
    searchDbConstructionPermitsTotalSubpermitValue?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchConstructionPermitsRequest extends SpeakeasyBase {
    queryParams: SearchConstructionPermitsQueryParams;
}
export declare class SearchConstructionPermitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
