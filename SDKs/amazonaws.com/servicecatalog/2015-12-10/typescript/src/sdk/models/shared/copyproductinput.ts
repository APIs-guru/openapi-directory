import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyOptionEnum } from "./copyoptionenum";



export class CopyProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyOptions" })
  copyOptions?: CopyOptionEnum[];

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=SourceProductArn" })
  sourceProductArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceProvisioningArtifactIdentifiers" })
  sourceProvisioningArtifactIdentifiers?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=TargetProductId" })
  targetProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetProductName" })
  targetProductName?: string;
}
