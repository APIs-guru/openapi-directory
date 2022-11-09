import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsMetadata } from "./opsmetadata";


export class ListOpsMetadataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OpsMetadataList", elemType: shared.OpsMetadata })
  opsMetadataList?: OpsMetadata[];
}
