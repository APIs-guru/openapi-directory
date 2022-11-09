import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetExportExportTypeEnum {
    AlexaSkillsKit = "ALEXA_SKILLS_KIT"
,    Lex = "LEX"
}

export enum GetExportResourceTypeEnum {
    Bot = "BOT"
,    Intent = "INTENT"
,    SlotType = "SLOT_TYPE"
}


export class GetExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exportType" })
  exportType: GetExportExportTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceType" })
  resourceType: GetExportResourceTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class GetExportHeaders extends SpeakeasyBase {
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


export class GetExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExportQueryParams;

  @Metadata()
  headers: GetExportHeaders;
}


export class GetExportResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getExportResponse?: shared.GetExportResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
