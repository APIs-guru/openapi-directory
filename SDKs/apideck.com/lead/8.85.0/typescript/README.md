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
import { LeadsAddRequest, LeadsAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    }
    applicationId: {
      apiKey: "YOUR_API_KEY_HERE",
    }
    consumerId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: LeadsAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "voluptatum",
    xApideckConsumerId: "temporibus",
    xApideckServiceId: "voluptas",
  },
  request: {
    addresses: [
      {
        city: "officiis",
        contactName: "aut",
        country: "rerum",
        county: "quasi",
        email: "quo",
        fax: "quibusdam",
        id: "veniam",
        latitude: "voluptatem",
        line1: "facere",
        line2: "rerum",
        line3: "ea",
        line4: "cupiditate",
        longitude: "blanditiis",
        name: "sed",
        phoneNumber: "tempora",
        postalCode: "neque",
        rowVersion: "commodi",
        salutation: "optio",
        state: "praesentium",
        streetNumber: "ipsa",
        string: "iusto",
        type: "shipping",
        website: "vel",
      },
      {
        city: "et",
        contactName: "doloremque",
        country: "animi",
        county: "doloremque",
        email: "deserunt",
        fax: "quam",
        id: "corporis",
        latitude: "nostrum",
        line1: "qui",
        line2: "praesentium",
        line3: "a",
        line4: "consequatur",
        longitude: "rerum",
        name: "qui",
        phoneNumber: "consequatur",
        postalCode: "animi",
        rowVersion: "facere",
        salutation: "perspiciatis",
        state: "ut",
        streetNumber: "facilis",
        string: "beatae",
        type: "office",
        website: "at",
      },
      {
        city: "sint",
        contactName: "accusamus",
        country: "saepe",
        county: "nihil",
        email: "ut",
        fax: "nostrum",
        id: "porro",
        latitude: "et",
        line1: "maxime",
        line2: "quae",
        line3: "est",
        line4: "odit",
        longitude: "eum",
        name: "placeat",
        phoneNumber: "illo",
        postalCode: "magnam",
        rowVersion: "quas",
        salutation: "nemo",
        state: "voluptatum",
        streetNumber: "quibusdam",
        string: "eos",
        type: "billing",
        website: "sit",
      },
    ],
    companyId: "libero",
    companyName: "et",
    contactId: "eaque",
    currency: "CUP",
    customFields: [
      {
        description: "optio",
        id: "inventore",
        name: "illo",
        value: "ea",
      },
      {
        description: "culpa",
        id: "accusamus",
        name: "illo",
        value: "id",
      },
      {
        description: "est",
        id: "architecto",
        name: "officiis",
        value: "deserunt",
      },
    ],
    description: "officiis",
    emails: [
      {
        email: "saepe",
        id: "eius",
        type: "primary",
      },
      {
        email: "sint",
        id: "dolor",
        type: "secondary",
      },
      {
        email: "molestiae",
        id: "error",
        type: "secondary",
      },
    ],
    fax: "quis",
    firstName: "autem",
    language: "ratione",
    lastName: "illo",
    leadSource: "eveniet",
    monetaryAmount: 32.099998,
    name: "eveniet",
    ownerId: "animi",
    phoneNumbers: [
      {
        areaCode: "laudantium",
        countryCode: "rerum",
        extension: "enim",
        id: "qui",
        number: "incidunt",
        type: "other",
      },
      {
        areaCode: "et",
        countryCode: "omnis",
        extension: "distinctio",
        id: "repellendus",
        number: "vero",
        type: "secondary",
      },
    ],
    prefix: "architecto",
    socialLinks: [
      {
        id: "et",
        type: "soluta",
        url: "ullam",
      },
      {
        id: "ea",
        type: "veritatis",
        url: "dolorum",
      },
    ],
    status: "voluptas",
    tags: [
      "saepe",
      "qui",
    ],
    title: "voluptatibus",
    websites: [
      {
        id: "quia",
        type: "work",
        url: "tempora",
      },
      {
        id: "quis",
        type: "work",
        url: "non",
      },
    ],
  },
};

sdk.leads.leadsAdd(req).then((res: LeadsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
