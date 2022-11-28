import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesRestorePackageVersionForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" })
  packageVersionId: number;
}


export class PackagesRestorePackageVersionForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesRestorePackageVersionForOrgPathParams;
}


export class PackagesRestorePackageVersionForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
