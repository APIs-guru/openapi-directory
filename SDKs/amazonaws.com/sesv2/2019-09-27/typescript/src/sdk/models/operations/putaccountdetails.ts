import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAccountDetailsHeaders extends SpeakeasyBase {
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

export enum PutAccountDetailsRequestBodyContactLanguageEnum {
    En = "EN"
,    Ja = "JA"
}

export enum PutAccountDetailsRequestBodyMailTypeEnum {
    Marketing = "MARKETING"
,    Transactional = "TRANSACTIONAL"
}


export class PutAccountDetailsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalContactEmailAddresses" })
  additionalContactEmailAddresses?: string[];

  @Metadata({ data: "json, name=ContactLanguage" })
  contactLanguage?: PutAccountDetailsRequestBodyContactLanguageEnum;

  @Metadata({ data: "json, name=MailType" })
  mailType: PutAccountDetailsRequestBodyMailTypeEnum;

  @Metadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @Metadata({ data: "json, name=UseCaseDescription" })
  useCaseDescription: string;

  @Metadata({ data: "json, name=WebsiteURL" })
  websiteUrl: string;
}


export class PutAccountDetailsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutAccountDetailsRequestBody;
}


export class PutAccountDetailsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  putAccountDetailsResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
