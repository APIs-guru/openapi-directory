import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchProjectSoftwarepackageQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.capabilities" })
  searchProjectSoftwarepackageCapabilities?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.domain" })
  searchProjectSoftwarepackageDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.license" })
  searchProjectSoftwarepackageLicense?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.platform" })
  searchProjectSoftwarepackagePlatform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_type" })
  searchProjectSoftwarepackageSoftwareType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_use" })
  searchProjectSoftwarepackageSoftwareUse?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.status" })
  searchProjectSoftwarepackageStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchProjectSoftwarepackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchProjectSoftwarepackageQueryParams;
}


export class SearchProjectSoftwarepackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
