import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespaceDeletionStatusErrorCodesEnum } from "./namespacedeletionstatuserrorcodesenum";
import { NamespaceDeletionStatusEnum } from "./namespacedeletionstatusenum";



export class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: NamespaceDeletionStatusErrorCodesEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NamespaceDeletionStatusEnum;
}
