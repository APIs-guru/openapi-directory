# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest, BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    location: "omnis",
    project: "molestiae",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "rerum",
    alt: "proto",
    callback: "minima",
    fields: "dignissimos",
    key: "quas",
    oauthToken: "ut",
    prettyPrint: true,
    quotaUser: "omnis",
    uploadType: "laboriosam",
    uploadProtocol: "quaerat",
  },
  request: {
    email: "at",
    provisioningConfig: {
      instances: [
        {
          clientNetwork: {
            address: "voluptas",
            existingNetworkId: "doloremque",
            networkId: "sint",
          },
          hyperthreading: true,
          id: "incidunt",
          instanceType: "ad",
          location: "explicabo",
          osImage: "sunt",
          privateNetwork: {
            address: "qui",
            existingNetworkId: "at",
            networkId: "expedita",
          },
          userNote: "rerum",
        },
        {
          clientNetwork: {
            address: "iste",
            existingNetworkId: "modi",
            networkId: "error",
          },
          hyperthreading: true,
          id: "ut",
          instanceType: "temporibus",
          location: "sint",
          osImage: "harum",
          privateNetwork: {
            address: "minima",
            existingNetworkId: "quia",
            networkId: "quisquam",
          },
          userNote: "minus",
        },
        {
          clientNetwork: {
            address: "provident",
            existingNetworkId: "aut",
            networkId: "illo",
          },
          hyperthreading: false,
          id: "aspernatur",
          instanceType: "illo",
          location: "ut",
          osImage: "et",
          privateNetwork: {
            address: "non",
            existingNetworkId: "aliquam",
            networkId: "ipsa",
          },
          userNote: "expedita",
        },
      ],
      networks: [
        {
          bandwidth: "BW_5_GBPS",
          cidr: "temporibus",
          id: "quidem",
          location: "rerum",
          serviceCidr: "HIGH_28",
          type: "CLIENT",
          userNote: "voluptatem",
          vlanAttachments: [
            {
              id: "asperiores",
              pairingKey: "sit",
            },
            {
              id: "dolorum",
              pairingKey: "animi",
            },
            {
              id: "aperiam",
              pairingKey: "omnis",
            },
          ],
        },
        {
          bandwidth: "BW_2_GBPS",
          cidr: "consectetur",
          id: "repudiandae",
          location: "quasi",
          serviceCidr: "SERVICE_CIDR_UNSPECIFIED",
          type: "PRIVATE",
          userNote: "necessitatibus",
          vlanAttachments: [
            {
              id: "sit",
              pairingKey: "expedita",
            },
            {
              id: "sunt",
              pairingKey: "ut",
            },
          ],
        },
        {
          bandwidth: "BW_1_GBPS",
          cidr: "sapiente",
          id: "culpa",
          location: "sed",
          serviceCidr: "HIGH_28",
          type: "PRIVATE",
          userNote: "rerum",
          vlanAttachments: [
            {
              id: "quis",
              pairingKey: "aliquam",
            },
            {
              id: "quam",
              pairingKey: "officiis",
            },
            {
              id: "sequi",
              pairingKey: "magni",
            },
          ],
        },
      ],
      ticketId: "et",
      volumes: [
        {
          id: "ducimus",
          location: "distinctio",
          lunRanges: [
            {
              quantity: 740268334717324780,
              sizeGb: 7481213423248665986,
            },
          ],
          machineIds: [
            "et",
            "rerum",
            "accusamus",
          ],
          nfsExports: [
            {
              allowDev: true,
              allowSuid: false,
              cidr: "ut",
              machineId: "placeat",
              networkId: "consectetur",
              noRootSquash: true,
              permissions: "PERMISSIONS_UNSPECIFIED",
            },
          ],
          protocol: "PROTOCOL_NFS",
          sizeGb: 2389271512943804651,
          snapshotsEnabled: true,
          type: "FLASH",
          userNote: "exercitationem",
        },
      ],
    },
  },
};

sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req).then((res: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `baremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `baremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
