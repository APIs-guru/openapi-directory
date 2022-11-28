import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetPackageForOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}


export class PackagesGetPackageForOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetPackageForOrganizationPathParams;
}


export class PackagesGetPackageForOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  package?: shared.Package;
}
