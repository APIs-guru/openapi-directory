import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListInstallationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListInstallationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsListInstallationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppsListInstallationsQueryParams;

  @SpeakeasyMetadata()
  headers: AppsListInstallationsHeaders;
}


export class AppsListInstallationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.InstallationGhes2 })
  installationGhes2s?: shared.InstallationGhes2[];
}
