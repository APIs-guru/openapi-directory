import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}

export enum PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum {
    Active = "active",
    Deleted = "deleted"
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
