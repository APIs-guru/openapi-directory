import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetImportInstallationMediaActionEnum {
    ImportInstallationMedia = "ImportInstallationMedia"
}

export enum GetImportInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetImportInstallationMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetImportInstallationMediaActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneId" })
  customAvailabilityZoneId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineInstallationMediaPath" })
  engineInstallationMediaPath: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OSInstallationMediaPath" })
  osInstallationMediaPath: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetImportInstallationMediaVersionEnum;
}


export class GetImportInstallationMediaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetImportInstallationMediaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetImportInstallationMediaQueryParams;

  @Metadata()
  headers: GetImportInstallationMediaHeaders;
}


export class GetImportInstallationMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
