import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineAttribute } from "./engineattribute";
import { NodeAssociationStatusEnum } from "./nodeassociationstatusenum";


export class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineAttributes", elemType: shared.EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @Metadata({ data: "json, name=NodeAssociationStatus" })
  nodeAssociationStatus?: NodeAssociationStatusEnum;
}
