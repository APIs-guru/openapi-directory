import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendEstimationToClientApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachPdf, form, name=AttachPdf;" })
  attachPdf?: boolean;

  @Metadata({ data: "json, name=EstimationId, form, name=EstimationId;" })
  estimationId?: number;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Message, form, name=Message;" })
  message?: string;

  @Metadata({ data: "json, name=SendToSelf, form, name=SendToSelf;" })
  sendToSelf?: boolean;

  @Metadata({ data: "json, name=Subject, form, name=Subject;" })
  subject?: string;
}
