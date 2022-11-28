import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretScanningAlertResolutionEnum } from "./secretscanningalertresolutionenum";
import { SimpleUser } from "./simpleuser";
import { SecretScanningAlertStateEnum } from "./secretscanningalertstateenum";



export class SecretScanningAlert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: SecretScanningAlertResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=resolved_at" })
  resolvedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resolved_by" })
  resolvedBy?: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=secret_type" })
  secretType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SecretScanningAlertStateEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
