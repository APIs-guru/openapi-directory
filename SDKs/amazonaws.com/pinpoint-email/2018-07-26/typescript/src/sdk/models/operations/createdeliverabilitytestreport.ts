import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeliverabilityTestReportHeaders extends SpeakeasyBase {
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


// CreateDeliverabilityTestReportRequestBodyContent
/** 
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
export class CreateDeliverabilityTestReportRequestBodyContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Raw" })
  raw?: shared.RawMessage;

  @Metadata({ data: "json, name=Simple" })
  simple?: shared.Message;

  @Metadata({ data: "json, name=Template" })
  template?: shared.Template;
}


export class CreateDeliverabilityTestReportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content: CreateDeliverabilityTestReportRequestBodyContent;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress: string;

  @Metadata({ data: "json, name=ReportName" })
  reportName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateDeliverabilityTestReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeliverabilityTestReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeliverabilityTestReportRequestBody;
}


export class CreateDeliverabilityTestReportResponse extends SpeakeasyBase {
  @Metadata()
  accountSuspendedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeliverabilityTestReportResponse?: shared.CreateDeliverabilityTestReportResponse;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  mailFromDomainNotVerifiedException?: any;

  @Metadata()
  messageRejected?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  sendingPausedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
