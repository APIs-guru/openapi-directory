import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";
import { SecretScanningAlertStateEnum } from "./secretscanningalertstateenum";


export class SecretScanningAlert extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=resolved_at" })
  resolvedAt?: Date;

  @Metadata({ data: "json, name=resolved_by" })
  resolvedBy?: SimpleUser;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=secret_type" })
  secretType?: string;

  @Metadata({ data: "json, name=state" })
  state?: SecretScanningAlertStateEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
