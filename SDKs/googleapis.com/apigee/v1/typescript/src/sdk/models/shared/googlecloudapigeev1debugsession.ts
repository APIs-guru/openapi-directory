import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1DebugSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=tracesize" })
  tracesize?: number;

  @Metadata({ data: "json, name=validity" })
  validity?: number;
}
