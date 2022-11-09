import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}

export enum PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum {
    Active = "active"
,    Deleted = "deleted"
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams;

  @Metadata()
  queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}


export class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.PackageVersion })
  packageVersions?: shared.PackageVersion[];
}
