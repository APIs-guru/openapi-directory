import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchConstructionPermitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.address" })
  searchDbConstructionPermitsAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.affordable_hsg_unit" })
  searchDbConstructionPermitsAffordableHsgUnit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.applied" })
  searchDbConstructionPermitsApplied?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.approved" })
  searchDbConstructionPermitsApproved?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.building_uses_and_work_scopes" })
  searchDbConstructionPermitsBuildingUsesAndWorkScopes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.case_status" })
  searchDbConstructionPermitsCaseStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.category" })
  searchDbConstructionPermitsCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.co_date" })
  searchDbConstructionPermitsCoDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.completion_date" })
  searchDbConstructionPermitsCompletionDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_company" })
  searchDbConstructionPermitsContractorCompany?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_first_name" })
  searchDbConstructionPermitsContractorFirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_last_name" })
  searchDbConstructionPermitsContractorLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.existing_res_unit" })
  searchDbConstructionPermitsExistingResUnit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.issued" })
  searchDbConstructionPermitsIssued?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.narrative_description" })
  searchDbConstructionPermitsNarrativeDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_res_unit" })
  searchDbConstructionPermitsNewResUnit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_sf" })
  searchDbConstructionPermitsNewSf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_company" })
  searchDbConstructionPermitsOwner1Company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_first_name" })
  searchDbConstructionPermitsOwner1FirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_last_name" })
  searchDbConstructionPermitsOwner1LastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_company" })
  searchDbConstructionPermitsOwner2Company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_first_name" })
  searchDbConstructionPermitsOwner2FirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_last_name" })
  searchDbConstructionPermitsOwner2LastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.permit_types" })
  searchDbConstructionPermitsPermitTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_company" })
  searchDbConstructionPermitsPrimaryCompany?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_first_name" })
  searchDbConstructionPermitsPrimaryFirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_last_name" })
  searchDbConstructionPermitsPrimaryLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.remodel_sf" })
  searchDbConstructionPermitsRemodelSf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_project_value" })
  searchDbConstructionPermitsTotalProjectValue?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_subpermit_value" })
  searchDbConstructionPermitsTotalSubpermitValue?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchConstructionPermitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchConstructionPermitsQueryParams;
}


export class SearchConstructionPermitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
