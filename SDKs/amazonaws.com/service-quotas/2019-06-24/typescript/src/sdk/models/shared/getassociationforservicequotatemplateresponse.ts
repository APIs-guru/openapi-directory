import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuotaTemplateAssociationStatusEnum } from "./servicequotatemplateassociationstatusenum";



export class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceQuotaTemplateAssociationStatus" })
  serviceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatusEnum;
}
