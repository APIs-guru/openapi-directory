import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}

export enum PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum {
    Active = "active",
    Deleted = "deleted"
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams;

  @SpeakeasyMetadata()
  queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
