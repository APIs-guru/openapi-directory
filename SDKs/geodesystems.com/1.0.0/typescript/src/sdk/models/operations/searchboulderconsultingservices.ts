import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBoulderConsultingServicesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.account_description" })
  searchDbBoulderConsultingServicesAccountDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.amount" })
  searchDbBoulderConsultingServicesAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.comment" })
  searchDbBoulderConsultingServicesComment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.date" })
  searchDbBoulderConsultingServicesDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.department" })
  searchDbBoulderConsultingServicesDepartment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.fund" })
  searchDbBoulderConsultingServicesFund?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.object" })
  searchDbBoulderConsultingServicesObject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.organization" })
  searchDbBoulderConsultingServicesOrganization?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.project" })
  searchDbBoulderConsultingServicesProject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.purchase_order" })
  searchDbBoulderConsultingServicesPurchaseOrder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_consulting_services.vendor_name" })
  searchDbBoulderConsultingServicesVendorName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderConsultingServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBoulderConsultingServicesQueryParams;
}


export class SearchBoulderConsultingServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
