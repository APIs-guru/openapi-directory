import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchProjectSoftwarepackageQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.capabilities" })
  searchProjectSoftwarepackageCapabilities?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.domain" })
  searchProjectSoftwarepackageDomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.license" })
  searchProjectSoftwarepackageLicense?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.platform" })
  searchProjectSoftwarepackagePlatform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_type" })
  searchProjectSoftwarepackageSoftwareType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_use" })
  searchProjectSoftwarepackageSoftwareUse?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.status" })
  searchProjectSoftwarepackageStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchProjectSoftwarepackageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchProjectSoftwarepackageQueryParams;
}


export class SearchProjectSoftwarepackageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
