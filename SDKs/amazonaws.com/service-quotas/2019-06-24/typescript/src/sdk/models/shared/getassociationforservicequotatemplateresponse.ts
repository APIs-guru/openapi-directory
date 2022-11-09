import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceQuotaTemplateAssociationStatusEnum } from "./servicequotatemplateassociationstatusenum";


export class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceQuotaTemplateAssociationStatus" })
  serviceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatusEnum;
}
