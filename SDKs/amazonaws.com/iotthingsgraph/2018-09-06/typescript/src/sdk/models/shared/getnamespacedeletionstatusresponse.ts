import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceDeletionStatusErrorCodesEnum } from "./namespacedeletionstatuserrorcodesenum";
import { NamespaceDeletionStatusEnum } from "./namespacedeletionstatusenum";


export class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: NamespaceDeletionStatusErrorCodesEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=status" })
  status?: NamespaceDeletionStatusEnum;
}
