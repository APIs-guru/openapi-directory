import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeeEmailTemplateInformationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_template_id" })
  emailTemplateId?: string;
}


export class SeeEmailTemplateInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SeeEmailTemplateInformationQueryParams;
}


export class SeeEmailTemplateInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
