import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}

export enum PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum {
    Active = "active"
,    Deleted = "deleted"
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams;

  @Metadata()
  queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
