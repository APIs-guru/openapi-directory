import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CopyOptionEnum } from "./copyoptionenum";


export class CopyProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=CopyOptions" })
  copyOptions?: CopyOptionEnum[];

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=SourceProductArn" })
  sourceProductArn: string;

  @Metadata({ data: "json, name=SourceProvisioningArtifactIdentifiers" })
  sourceProvisioningArtifactIdentifiers?: Map<string, string>[];

  @Metadata({ data: "json, name=TargetProductId" })
  targetProductId?: string;

  @Metadata({ data: "json, name=TargetProductName" })
  targetProductName?: string;
}
