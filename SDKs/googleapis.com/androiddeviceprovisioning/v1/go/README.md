# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        PathParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams{
            Parent: "ut",
        },
        QueryParams: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "doloribus",
            Alt: "proto",
            Callback: "excepturi",
            Fields: "repellendus",
            Key: "nihil",
            OauthToken: "quasi",
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "dolorem",
            UploadProtocol: "quis",
        },
        Request: &shared.ConfigurationInput{
            CompanyName: "aut",
            ConfigurationName: "qui",
            ContactEmail: "laborum",
            ContactPhone: "quod",
            CustomMessage: "eius",
            DpcExtras: "officia",
            DpcResourcePath: "inventore",
            IsDefault: true,
        },
    }
    
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `AndroiddeviceprovisioningCustomersConfigurationsCreate` - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* `AndroiddeviceprovisioningCustomersConfigurationsDelete` - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* `AndroiddeviceprovisioningCustomersConfigurationsList` - Lists a customer's configurations.
* `AndroiddeviceprovisioningCustomersConfigurationsPatch` - Updates a configuration's field values.
* `AndroiddeviceprovisioningCustomersDevicesApplyConfiguration` - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* `AndroiddeviceprovisioningCustomersDevicesList` - Lists a customer's devices.
* `AndroiddeviceprovisioningCustomersDevicesRemoveConfiguration` - Removes a configuration from device.
* `AndroiddeviceprovisioningCustomersDevicesUnclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* `AndroiddeviceprovisioningCustomersDpcsList` - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* `AndroiddeviceprovisioningCustomersList` - Lists the user's customer accounts.

### partners

* `AndroiddeviceprovisioningPartnersCustomersCreate` - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* `AndroiddeviceprovisioningPartnersCustomersList` - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* `AndroiddeviceprovisioningPartnersDevicesClaim` - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* `AndroiddeviceprovisioningPartnersDevicesClaimAsync` - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `AndroiddeviceprovisioningPartnersDevicesFindByIdentifier` - Finds devices by hardware identifiers, such as IMEI.
* `AndroiddeviceprovisioningPartnersDevicesFindByOwner` - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* `AndroiddeviceprovisioningPartnersDevicesGet` - Gets a device.
* `AndroiddeviceprovisioningPartnersDevicesMetadata` - Updates reseller metadata associated with the device. Android devices only.
* `AndroiddeviceprovisioningPartnersDevicesUnclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment.
* `AndroiddeviceprovisioningPartnersDevicesUnclaimAsync` - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync` - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* `AndroiddeviceprovisioningPartnersVendorsCustomersList` - Lists the customers of the vendor.
* `AndroiddeviceprovisioningPartnersVendorsList` - Lists the vendors of the partner.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
