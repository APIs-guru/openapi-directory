import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeeEmailTemplateInformationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email_template_id" })
  emailTemplateId?: string;
}


export class SeeEmailTemplateInformationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SeeEmailTemplateInformationQueryParams;
}


export class SeeEmailTemplateInformationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
