import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetBuiltinIntentsLocaleEnum {
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


export class GetBuiltinIntentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: GetBuiltinIntentsLocaleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signatureContains" })
  signatureContains?: string;
}


export class GetBuiltinIntentsHeaders extends SpeakeasyBase {
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


export class GetBuiltinIntentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBuiltinIntentsQueryParams;

  @Metadata()
  headers: GetBuiltinIntentsHeaders;
}


export class GetBuiltinIntentsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getBuiltinIntentsResponse?: shared.GetBuiltinIntentsResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
