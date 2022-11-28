import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeVoicesEngineEnum {
    Standard = "standard",
    Neural = "neural"
}

export enum DescribeVoicesLanguageCodeEnum {
    Arb = "arb",
    CmnCn = "cmn-CN",
    CyGb = "cy-GB",
    DaDk = "da-DK",
    DeDe = "de-DE",
    EnAu = "en-AU",
    EnGb = "en-GB",
    EnGbWls = "en-GB-WLS",
    EnIn = "en-IN",
    EnUs = "en-US",
    EsEs = "es-ES",
    EsMx = "es-MX",
    EsUs = "es-US",
    FrCa = "fr-CA",
    FrFr = "fr-FR",
    IsIs = "is-IS",
    ItIt = "it-IT",
    JaJp = "ja-JP",
    HiIn = "hi-IN",
    KoKr = "ko-KR",
    NbNo = "nb-NO",
    NlNl = "nl-NL",
    PlPl = "pl-PL",
    PtBr = "pt-BR",
    PtPt = "pt-PT",
    RoRo = "ro-RO",
    RuRu = "ru-RU",
    SvSe = "sv-SE",
    TrTr = "tr-TR",
    EnNz = "en-NZ",
    EnZa = "en-ZA"
}


export class DescribeVoicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: DescribeVoicesEngineEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeAdditionalLanguageCodes" })
  includeAdditionalLanguageCodes?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LanguageCode" })
  languageCode?: DescribeVoicesLanguageCodeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class DescribeVoicesHeaders extends SpeakeasyBase {
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


export class DescribeVoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeVoicesQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeVoicesHeaders;
}


export class DescribeVoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeVoicesOutput?: shared.DescribeVoicesOutput;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  serviceFailureException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
