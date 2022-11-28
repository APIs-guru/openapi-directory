import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchConstructionPermitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.address" })
  searchDbConstructionPermitsAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.affordable_hsg_unit" })
  searchDbConstructionPermitsAffordableHsgUnit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.applied" })
  searchDbConstructionPermitsApplied?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.approved" })
  searchDbConstructionPermitsApproved?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.building_uses_and_work_scopes" })
  searchDbConstructionPermitsBuildingUsesAndWorkScopes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.case_status" })
  searchDbConstructionPermitsCaseStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.category" })
  searchDbConstructionPermitsCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.co_date" })
  searchDbConstructionPermitsCoDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.completion_date" })
  searchDbConstructionPermitsCompletionDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_company" })
  searchDbConstructionPermitsContractorCompany?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_first_name" })
  searchDbConstructionPermitsContractorFirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_last_name" })
  searchDbConstructionPermitsContractorLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.existing_res_unit" })
  searchDbConstructionPermitsExistingResUnit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.issued" })
  searchDbConstructionPermitsIssued?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.narrative_description" })
  searchDbConstructionPermitsNarrativeDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_res_unit" })
  searchDbConstructionPermitsNewResUnit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_sf" })
  searchDbConstructionPermitsNewSf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_company" })
  searchDbConstructionPermitsOwner1Company?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_first_name" })
  searchDbConstructionPermitsOwner1FirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_last_name" })
  searchDbConstructionPermitsOwner1LastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_company" })
  searchDbConstructionPermitsOwner2Company?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_first_name" })
  searchDbConstructionPermitsOwner2FirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_last_name" })
  searchDbConstructionPermitsOwner2LastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.permit_types" })
  searchDbConstructionPermitsPermitTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_company" })
  searchDbConstructionPermitsPrimaryCompany?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_first_name" })
  searchDbConstructionPermitsPrimaryFirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_last_name" })
  searchDbConstructionPermitsPrimaryLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.remodel_sf" })
  searchDbConstructionPermitsRemodelSf?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_project_value" })
  searchDbConstructionPermitsTotalProjectValue?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_subpermit_value" })
  searchDbConstructionPermitsTotalSubpermitValue?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchConstructionPermitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchConstructionPermitsQueryParams;
}


export class SearchConstructionPermitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
