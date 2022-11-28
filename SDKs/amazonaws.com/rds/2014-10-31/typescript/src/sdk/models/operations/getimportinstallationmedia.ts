import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetImportInstallationMediaActionEnum {
    ImportInstallationMedia = "ImportInstallationMedia"
}

export enum GetImportInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetImportInstallationMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetImportInstallationMediaActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneId" })
  customAvailabilityZoneId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineInstallationMediaPath" })
  engineInstallationMediaPath: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OSInstallationMediaPath" })
  osInstallationMediaPath: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetImportInstallationMediaVersionEnum;
}


export class GetImportInstallationMediaHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetImportInstallationMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImportInstallationMediaQueryParams;

  @SpeakeasyMetadata()
  headers: GetImportInstallationMediaHeaders;
}


export class GetImportInstallationMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
