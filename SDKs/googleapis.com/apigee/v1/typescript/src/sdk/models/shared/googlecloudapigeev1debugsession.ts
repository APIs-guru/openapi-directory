import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1DebugSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=tracesize" })
  tracesize?: number;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: number;
}


export class GoogleCloudApigeeV1DebugSessionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=tracesize" })
  tracesize?: number;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: number;
}
