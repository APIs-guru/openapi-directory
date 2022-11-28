import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
