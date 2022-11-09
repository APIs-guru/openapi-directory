import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetBuiltinSlotTypesLocaleEnum {
    DeDe = "de-DE"
,    EnAu = "en-AU"
,    EnGb = "en-GB"
,    EnIn = "en-IN"
,    EnUs = "en-US"
,    Es419 = "es-419"
,    EsEs = "es-ES"
,    EsUs = "es-US"
,    FrFr = "fr-FR"
,    FrCa = "fr-CA"
,    ItIt = "it-IT"
,    JaJp = "ja-JP"
,    KoKr = "ko-KR"
}


export class GetBuiltinSlotTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: GetBuiltinSlotTypesLocaleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signatureContains" })
  signatureContains?: string;
}


export class GetBuiltinSlotTypesHeaders extends SpeakeasyBase {
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


export class GetBuiltinSlotTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBuiltinSlotTypesQueryParams;

  @Metadata()
  headers: GetBuiltinSlotTypesHeaders;
}


export class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getBuiltinSlotTypesResponse?: shared.GetBuiltinSlotTypesResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
