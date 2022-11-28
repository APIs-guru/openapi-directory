import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesRestorePackageForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}


export class PackagesRestorePackageForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class PackagesRestorePackageForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesRestorePackageForAuthenticatedUserPathParams;

  @SpeakeasyMetadata()
  queryParams: PackagesRestorePackageForAuthenticatedUserQueryParams;
}


export class PackagesRestorePackageForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
