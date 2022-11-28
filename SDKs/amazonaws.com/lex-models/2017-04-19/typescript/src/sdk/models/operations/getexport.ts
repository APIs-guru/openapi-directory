import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetExportExportTypeEnum {
    AlexaSkillsKit = "ALEXA_SKILLS_KIT",
    Lex = "LEX"
}

export enum GetExportResourceTypeEnum {
    Bot = "BOT",
    Intent = "INTENT",
    SlotType = "SLOT_TYPE"
}


export class GetExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exportType" })
  exportType: GetExportExportTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceType" })
  resourceType: GetExportResourceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class GetExportHeaders extends SpeakeasyBase {
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


export class GetExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExportQueryParams;

  @SpeakeasyMetadata()
  headers: GetExportHeaders;
}


export class GetExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getExportResponse?: shared.GetExportResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
