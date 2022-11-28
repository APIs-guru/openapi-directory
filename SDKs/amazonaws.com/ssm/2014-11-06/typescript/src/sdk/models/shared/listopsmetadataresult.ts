import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsMetadata } from "./opsmetadata";



export class ListOpsMetadataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsMetadataList", elemType: OpsMetadata })
  opsMetadataList?: OpsMetadata[];
}
