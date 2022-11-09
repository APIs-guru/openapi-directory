import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
