package shared

// CustomAvailabilityZone
// <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
type CustomAvailabilityZone struct {
	CustomAvailabilityZoneID     *string
	CustomAvailabilityZoneName   *string
	CustomAvailabilityZoneStatus *string
	VpnDetails                   *VpnDetails
}
