import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesDeletePackageForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}


export class PackagesDeletePackageForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesDeletePackageForOrgPathParams;
}


export class PackagesDeletePackageForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
