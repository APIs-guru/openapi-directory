import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetBuiltinSlotTypesLocaleEnum {
    DeDe = "de-DE",
    EnAu = "en-AU",
    EnGb = "en-GB",
    EnIn = "en-IN",
    EnUs = "en-US",
    Es419 = "es-419",
    EsEs = "es-ES",
    EsUs = "es-US",
    FrFr = "fr-FR",
    FrCa = "fr-CA",
    ItIt = "it-IT",
    JaJp = "ja-JP",
    KoKr = "ko-KR"
}


export class GetBuiltinSlotTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: GetBuiltinSlotTypesLocaleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureContains" })
  signatureContains?: string;
}


export class GetBuiltinSlotTypesHeaders extends SpeakeasyBase {
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


export class GetBuiltinSlotTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBuiltinSlotTypesQueryParams;

  @SpeakeasyMetadata()
  headers: GetBuiltinSlotTypesHeaders;
}


export class GetBuiltinSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBuiltinSlotTypesResponse?: shared.GetBuiltinSlotTypesResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
