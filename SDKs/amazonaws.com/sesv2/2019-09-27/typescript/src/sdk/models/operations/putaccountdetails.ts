import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAccountDetailsHeaders extends SpeakeasyBase {
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

export enum PutAccountDetailsRequestBodyContactLanguageEnum {
    En = "EN",
    Ja = "JA"
}

export enum PutAccountDetailsRequestBodyMailTypeEnum {
    Marketing = "MARKETING",
    Transactional = "TRANSACTIONAL"
}


export class PutAccountDetailsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalContactEmailAddresses" })
  additionalContactEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContactLanguage" })
  contactLanguage?: PutAccountDetailsRequestBodyContactLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=MailType" })
  mailType: PutAccountDetailsRequestBodyMailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseCaseDescription" })
  useCaseDescription: string;

  @SpeakeasyMetadata({ data: "json, name=WebsiteURL" })
  websiteUrl: string;
}


export class PutAccountDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAccountDetailsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutAccountDetailsRequestBody;
}


export class PutAccountDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAccountDetailsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
